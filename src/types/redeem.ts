export enum PageStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

enum AnswerType {
  TEXT = "text",
  TEXT_AREA = "text_area",
  SELECT_ONE = "select_one",
  SELECT_MULTIPLE = "select_multiple",
  DATE = "date",
}

interface Size {
  id: string;
  name: string;
}

interface SizeGrid {
  name: string;
}

export interface Item {
  customer_product_id: string;
  name: string;
  quantity: number;
  optional: boolean;
  image_url: string;
  sizes_grid: SizeGrid;
  sizes: Size[];
}

interface QuestionOption {
  value: string;
}

export interface ExtraQuestion {
  id: number;
  answer_type: AnswerType;
  question: string;
  position: number;
  options: QuestionOption[];
}

export interface RescuePage {
  id: string;
  status: PageStatus;
  title: string;
  welcome_title: string;
  welcome_phrase: string;
  logo_url: string;
  background_color: string;
  button_color: string;
  items: Item[];
  extra_questions: ExtraQuestion[];
}

export interface SelectedItem {
  customer_product_id: string;
  size_name: string;
}

export interface FormValues {
  redeemer_name: string;
  redeemer_email: string;
  redeemer_document_number: string;
  redeemer_zipcode: string;
  redeemer_street: string;
  redeemer_number: string;
  redeemer_complement: string;
  redeemer_neighborhood: string;
  redeemer_city: string;
  redeemer_state: string;
  redeemer_country: string;
  redeemer_phone: string;
  extra_question_responses: {
    extra_question_id: number;
    answer: string;
  }[];
  items: SelectedItem[];
}
