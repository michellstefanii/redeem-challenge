import { Yup } from "~/utils/yup";
import { formValidationSchema } from "./validationSchema";
import { AnyObjectSchema } from "yup";

export const stepValidationSchemas = (): AnyObjectSchema[] => {
  const fullValidationSchema = formValidationSchema();

  return [
    Yup.object().shape({}),
    Yup.object().shape({
      items: fullValidationSchema.fields.items,
    }),
    Yup.object().shape({
      redeemer_name: fullValidationSchema.fields.redeemer_name,
      redeemer_email: fullValidationSchema.fields.redeemer_email,
      redeemer_document_number:
        fullValidationSchema.fields.redeemer_document_number,
      redeemer_zipcode: fullValidationSchema.fields.redeemer_zipcode,
      redeemer_street: fullValidationSchema.fields.redeemer_street,
      redeemer_number: fullValidationSchema.fields.redeemer_number,
      redeemer_complement: fullValidationSchema.fields.redeemer_complement,
      redeemer_neighborhood: fullValidationSchema.fields.redeemer_neighborhood,
      redeemer_city: fullValidationSchema.fields.redeemer_city,
      redeemer_state: fullValidationSchema.fields.redeemer_state,
      redeemer_country: fullValidationSchema.fields.redeemer_country,
      extra_question_responses:
        fullValidationSchema.fields.extra_question_responses,
      items: fullValidationSchema.fields.items
    }),
  ];
};
