export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      groups: {
        Row: {
          created_at: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      groups_notes: {
        Row: {
          created_at: string
          group_id: number
          id: number
          note_id: string
        }
        Insert: {
          created_at?: string
          group_id: number
          id?: number
          note_id: string
        }
        Update: {
          created_at?: string
          group_id?: number
          id?: number
          note_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "groups_notes_group_id_fkey"
            columns: ["group_id"]
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "groups_notes_note_id_fkey"
            columns: ["note_id"]
            referencedRelation: "notes"
            referencedColumns: ["id"]
          }
        ]
      }
      notes: {
        Row: {
          archived: boolean
          author: string | null
          category: string
          content: string
          cover: string | null
          created_at: string
          group_id: number | null
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          archived?: boolean
          author?: string | null
          category: string
          content: string
          cover?: string | null
          created_at?: string
          group_id?: number | null
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          archived?: boolean
          author?: string | null
          category?: string
          content?: string
          cover?: string | null
          created_at?: string
          group_id?: number | null
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "notes_author_fkey"
            columns: ["author"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notes_category_fkey"
            columns: ["category"]
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notes_group_id_fkey"
            columns: ["group_id"]
            referencedRelation: "groups"
            referencedColumns: ["id"]
          }
        ]
      }
      profile_notes: {
        Row: {
          created_at: string
          id: string
          note_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          note_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          note_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profile_notes_note_id_fkey"
            columns: ["note_id"]
            referencedRelation: "notes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profile_notes_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar: string
          created_at: string
          id: string
          name: string
          user: string
        }
        Insert: {
          avatar: string
          created_at?: string
          id?: string
          name: string
          user: string
        }
        Update: {
          avatar?: string
          created_at?: string
          id?: string
          name?: string
          user?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_user_fkey"
            columns: ["user"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles_followers: {
        Row: {
          created_at: string
          follower_id: string
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          follower_id: string
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string
          follower_id?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_followers_follower_id_fkey"
            columns: ["follower_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_followers_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles_following: {
        Row: {
          created_at: string
          following_id: string
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          following_id: string
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string
          following_id?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_following_following_id_fkey"
            columns: ["following_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_following_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
