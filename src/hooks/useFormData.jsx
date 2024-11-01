// import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";

const useFormData = () => {
  const {
    register,
    unregister,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      company: "",
      position: "",
      postedAt: "",
      contract: "",
      location: "",
      website: "",
      apply: "",
      description: "",
      requirements: {
        content: "",
        items: [],
      },
      role: {
        content: "",
        items: [],
      },
    },
    shouldUnregister: true,
  });

  return [register, unregister, handleSubmit, reset, errors];
};

export default useFormData;
