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
      contract: "",
      location: "",
      website: "",
      apply: "",
      postedAt: "",
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
