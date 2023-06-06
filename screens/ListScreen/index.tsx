import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Main, Title, Todo, TodoBox } from './ListScreenStyles';

export default function ListScreen() {
  const [todoList, setTodoList] = React.useState([{
    name: 'Exemplo Do Que Fazer',
    isChecked: false,
    key: '1'
  }]);
  const changeCheck = (index: number, isChecked: boolean) => {
    const newTodoList = [...todoList];
    newTodoList[index].isChecked = isChecked;
    setTodoList(newTodoList);
  }
  return (
    <Main>
      <Title>Lista De Tarefas</Title>
      <Todo>

        {todoList.map((todo, index) => (
          <TodoBox key={todo.key}>
            <BouncyCheckbox
              isChecked={todo.isChecked}
              size={25}
              unfillColor="#FFFFFF"
              text={todo.name}
              iconStyle={{ borderColor: 'red', marginLeft: 10 }}
              innerIconStyle={{ borderWidth: 1 }}
              textStyle={{ fontFamily: 'JosefinSans-Regular', color: 'white' }}
              onPress={(isChecked) => changeCheck(index, isChecked)}
            />
          </TodoBox>
        ))}


      </Todo>
    </Main>
  );
}
