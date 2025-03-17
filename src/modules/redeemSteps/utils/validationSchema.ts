import { validateCpfCnpj } from "~/utils/validateCpfCnpj";
import { Yup } from "~/utils/yup";

export const formValidationSchema = () => {
  return Yup.object().shape({
    items: Yup.array()
      .of(
        Yup.object().shape({
          customer_product_id: Yup.string().required(
            "ID do produto é obrigatório"
          ),
          size_name: Yup.string().notRequired(),
        })
      )
      .min(1, "Selecione ao menos um item")
      .required("A seleção de itens é obrigatória"),
    redeemer_name: Yup.string()
      .required("Nome é obrigatório")
      .min(3, "Nome deve ter no mínimo 3 caracteres")
      .matches(
        /^[a-zA-ZáéíóúãõçÁÉÍÓÚÃÕÇ\s]+$/,
        "Nome deve conter apenas letras e espaços"
      ),
    redeemer_email: Yup.string()
      .email("Email inválido")
      .required("Email é obrigatório"),
    redeemer_document_number: Yup.string()
      .required("CPF/CNPJ é obrigatório")
      .test("is-valid-cpf-cnpj", "CPF ou CNPJ inválido", (value) => {
        const isValidCpfCnpj = validateCpfCnpj(value.replace(/[^a-zA-Z0-9\s]/g, ''));
        return isValidCpfCnpj;
      }),
    redeemer_zipcode: Yup.string()
      .required("CEP é obrigatório")
      .max(9, "Nome deve ter no máximo 9 caracteres")
      .matches(/^\d{5}-\d{3}$/, "CEP inválido, formato esperado: 00000-000"),
    redeemer_street: Yup.string().required("Rua é obrigatória"),
    redeemer_number: Yup.string()
      .required("Número é obrigatório")
      .matches(/^\d+$/, "Número inválido, apenas números são permitidos"),
    redeemer_complement: Yup.string(),
    redeemer_neighborhood: Yup.string().required("Bairro é obrigatório"),
    redeemer_city: Yup.string().required("Cidade é obrigatória"),
    redeemer_state: Yup.string().required("Estado é obrigatório"),
    redeemer_country: Yup.string().required("País é obrigatório"),
    extra_question_responses: Yup.array().of(
      Yup.object().shape({
        extra_question_id: Yup.number().notRequired(),
        answer: Yup.string().notRequired(),
      })
    ),
  });
};
