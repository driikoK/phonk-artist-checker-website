import Response from './index';

export default {
  title: 'App/Response',
  component: Response,
};

  const Template = (args) => <Response {...args} />;

  export const Default = Template.bind({});
  Default.args = {
    message: 'Відповідь, люди',
  };
