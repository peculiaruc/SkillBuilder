import { Button, Paper, Stack } from '@mui/material';
import { FormikValues } from 'formik';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { closeDialog, openDialog } from '../../store/dialogFormReducer';
import FormBuilder from './FormBuilder';

interface FormProps {
  title: string;
  model: any;
  mutation: any;
  dialog: boolean;
}

type Props = Required<FormProps>;

export default function MixedForm({
  title = 'Add new model',
  model,
  mutation,
  dialog,
} : Props): JSX.Element {
  // const model = new Entity();
  const dispatch = useDispatch();
  const openForm = () => dispatch(openDialog());
  const onCancel = () => dispatch(closeDialog());
  const onSubmit = async (values:FormikValues) => {
    const data = model.beforeSubmit(values) ?? values;
    await mutation(data);
    toast(`${model.name} created successfully`);
    onCancel();
  };
  return (
    <Paper
      sx={{
        width: '100%',
        bgcolor: 'common.background',
        p: 2,
      }}
    >
      <Stack
        spacing={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 2,
        }}
      >
        <FormBuilder
          dialog={dialog}
          title={title}
          model={model}
          onSubmit={onSubmit}
          onCancel={onCancel}
        />
        {dialog && (<Button size="large" onClick={openForm}>{title}</Button>)}
      </Stack>
    </Paper>
  );
}
