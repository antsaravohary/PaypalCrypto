import React, { useState, useEffect } from "react";
import { Modal } from "@mantine/core";
import App from "./App";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { useForm } from "@mantine/form";
import { TextInput, Loader } from "@mantine/core";
import {
  PayPalButtons,
  PayPalScriptProvider,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useRecoilState } from "recoil";
import { ModalState } from "./atom/atom";

export default function Layout() {
  const [opened, setOpened] = useState(false);
  // const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [modalState, setModalState] = useRecoilState(ModalState);


  const product = {
    description: "Design+Code React Hooks Course",
    price: 30,
  };

  const initialOptions = {
    "client-id": process.env.REACT_APP_PAYPAL_KEY,
    currency: "EUR",
    intent: "capture",
  };

  // const handleApprove = (orderId) => {
  //   setPaidFor(true);
  // };

  const onCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: "Description",
          amount: {
            value: "4.99",
            //currency_code: "EUR",
          },
        },
      ],
    })
  }

  const onApproveOrder = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      alert(`Transaction completed by ${name}`);
      setModalState(true);

    });
  }


  const form = useForm({
    initialValues: {
      phone: "",
      email: "",
    },
  });

  if (error) {
    alert(error.message);
  }

  console.log("api paypal client ID:", process.env.REACT_APP_PAYPAL_KEY)

  return (
    <PayPalScriptProvider options={{
      "client-id": process.env.REACT_APP_PAYPAL_KEY,
      currency: "EUR",
    }}>
      <div>
        <Modal
          overflow="inside"
          centered
          size="lg"
          opened={opened}
          onClose={() => setOpened(false)}
        >
          <h2 className="text-2xl font-medium"> Informations de paiement</h2>
          <TextInput
            label="Téléphone"
            placeholder="Numéro de téléphone"
            {...form.getInputProps("phone")}
          />
          <TextInput
            my="md"
            label="Email"
            placeholder="email"
            {...form.getInputProps("email")}
          />

          {isPending && <Loader />}

          <PayPalButtons
            createOrder={(data, actions) => onCreateOrder(data, actions)}
            onApprove={(data, actions) => onApproveOrder(data, actions)}
          />
        </Modal>
        <Navbar
          onModalChange={(isModalActive) => {
            setOpened(isModalActive);
          }}
        />
        <App />
        <Footer />
      </div>
    </PayPalScriptProvider>
  );
}
