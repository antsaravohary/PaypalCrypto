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

export default function Layout() {
  const [opened, setOpened] = useState(false);
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  const product = {
    description: "Design+Code React Hooks Course",
    price: 30,
  };

  const handleApprove = (orderId) => {
    setPaidFor(true);
  };

  const form = useForm({
    initialValues: {
      phone: "",
      email: "",
    },
  });

  if (error) {
    alert(error.message);
  }

  return (
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
        <PayPalScriptProvider
          options={{
            "client-id": process.env.REACT_APP_PAYPAL_KEY,
          }}
        >
          <PayPalButtons />
        </PayPalScriptProvider>
      </Modal>
      <Navbar
        onModalChange={(isModalActive) => {
          setOpened(isModalActive);
        }}
      />
      <App />
      <Footer />
    </div>
  );
}
