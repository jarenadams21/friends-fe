import TagProps from "./TagProps";

export default interface EventProps {
  name: String;
  location: Object;
  dateTime: Date;
  image: string;
  tags: TagProps[];
  description: String;
  popularity: Number;
}
