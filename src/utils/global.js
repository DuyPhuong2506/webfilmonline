
import { apiAdmin } from "../services/adminApi";
export const PHOTO_CATEGORY_OPTIONS = [
  { value: 1, label: 'Technology' },
  { value: 2, label: 'Education' },
  { value: 3, label: 'Nature' },
  { value: 4, label: 'Animals' },
  { value: 5, label: 'Styles' },
];





export const KINDOF_FIRM = async () => {
  try {
      const res = await apiAdmin.fetchApiListKindOfFilm();
      const data = res.data;
      console.log(res.data);
      return data;
  } catch (e) {
      console.error(e)
  }
}