import React from "react";
import { Box } from "@mui/material";
import { MainFont } from "~/components/typography";
import Grid from "@mui/material/Grid2";
import { ExtraQuestion, FormValues } from "~/types/redeem";
import { Control, UseFormSetValue } from "react-hook-form";
import { FormField } from "~/components/formFields";

interface ExtraQuestionsProps {
  sortedExtraQuestions: ExtraQuestion[];
  control: Control<FormValues>;
  setValue: UseFormSetValue<FormValues>;
  gridSize: number;
}

const ExtraQuestions: React.FC<ExtraQuestionsProps> = ({
  sortedExtraQuestions,
  control,
  setValue,
  gridSize
}) => {
  if (sortedExtraQuestions.length === 0) return null;

  return (
    <Box sx={{ mb: 4, mt: 6 }}>
      <MainFont fontSize={16} weight={600}>
        Perguntas Extras
      </MainFont>
      <Grid sx={{ mt: 4 }} container spacing={4}>
        {sortedExtraQuestions.map((question, index) => (
          <React.Fragment key={question.id}>
            {question.answer_type === "text" && (
              <FormField
                name={`extra_question_responses.${index}.answer`}
                label={question.question}
                control={control}
                gridSize={gridSize}
                onChange={(e) =>
                  setValue(`extra_question_responses.${index}`, {
                    extra_question_id: question.id,
                    answer: e.target.value,
                  })
                }
              />
            )}
            {question.answer_type === "text_area" && (
              <FormField
                name={`extra_question_responses.${index}.answer`}
                label={question.question}
                control={control}
                multiline
                type="text"
                rows={4}
                gridSize={gridSize}
                onChange={(e) => {
                  setValue(`extra_question_responses.${index}`, {
                    extra_question_id: question.id,
                    answer: e.target.value,
                  })
                }
                }
              />
            )}
            {question.answer_type === "select_one" && (
              <FormField
                name={`extra_question_responses.${index}.answer`}
                label={question.question}
                control={control}
                type="select"
                options={question.options}
                gridSize={gridSize}
                onChange={(e) =>
                  setValue(`extra_question_responses.${index}`, {
                    extra_question_id: question.id,
                    answer: e.target.value,
                  })
                }
              />
            )}
            {question.answer_type === "date" && (
              <FormField
                name={`extra_question_responses.${index}.answer`}
                label={question.question}
                control={control}
                type="date"
                gridSize={gridSize}
                onChange={(e) =>
                   {
                     setValue(`extra_question_responses.${index}`, {
                       extra_question_id: question.id,
                       answer: String(e),
                     })
                   }
                }
              />
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default ExtraQuestions;
