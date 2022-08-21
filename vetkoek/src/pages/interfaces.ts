export interface User {
  object_id: string;
  username: string;
  profile_pic: string | null;
  cover_pic: string | null;
  display_name: string | null;
  bio: string;
  is_verified: boolean;
  has_imported: boolean;
  app_password?: string | null;
}
