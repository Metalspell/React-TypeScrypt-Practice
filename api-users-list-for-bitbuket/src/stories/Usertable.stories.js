import Usertable from "../Components/Userstable/Usertable";

export default {
  title: "Components/Usertable",
  component: Usertable,
}

const Template = args => <Usertable {...args} />

export const SmallList = Template.bind({})

SmallList.args = {
  countOfUsers: 3,
}

export const LargeList = Template.bind({})

LargeList.args = {
  countOfUsers: 10,
}