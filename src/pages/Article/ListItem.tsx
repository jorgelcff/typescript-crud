import { Article } from "../../interfaces/RecordEntities";
import { ListItemProps } from "../../interfaces/PagesProps";

type Iprops = ListItemProps<Article>;

export const ArticleListItem: React.FC<Iprops> = ({record})=> {
  return(
    <div>
      <div className="title">{record.title}</div>
      <div className="author">{record.author?.name || 'Unknow'}</div>
    </div>
  )
}