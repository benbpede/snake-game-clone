import { useDispatch, useSelector } from 'react-redux';
import { changeField } from '../modules/auth';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));
  //인풋 변경 이벤트 핸들러
  const Onchange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };
};
