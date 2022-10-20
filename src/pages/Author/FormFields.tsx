import { Author } from "../../interfaces/RecordEntities";
import { FormFieldProps } from "../../interfaces/PagesProps";

type IProps = FormFieldProps<Author>;

export const AuthorFormFields: React.FC<IProps> = ({
  formState,
  handleChange,
}) => {
  return (
    <div>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
