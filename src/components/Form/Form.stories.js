import Form from './index';

export default {
  title: 'App/Form',
  component: Form,
};

  
  const Template = (args) => <Form {...args} />;

  export const Default = Template.bind({});
  Default.args = {
    handleKeyDown: () => {}, 
    onSubmit: () => {}, 
  };
