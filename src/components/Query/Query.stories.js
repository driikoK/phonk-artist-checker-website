import Query from './index';

export default {
  title: 'App/Query',
  component: Query,
};

  const Template = (args) => <Query {...args} />;

  export const Default = Template.bind({});
  Default.args = {
    message: 'Запит, боте',
  };
