import Histories from './index';

export default {
  title: 'App/Histories',
  component: Histories,
};

  
  const Template = (args) => <Histories {...args} />;

  export const Default = Template.bind({});
  Default.args = {
    histories: [{message: `Щоб дізнатися, чи виконавець кацап, введіть його ім'я 👇`, type: 'response'}, {message: 'Kute', type: 'query'}, {message: 'Кацап 🤮', type: 'response'}],
  };
