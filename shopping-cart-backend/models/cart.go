package models

import "github.com/google/uuid"

type Cart struct {
	ID     uuid.UUID `gorm:"type:uuid;primaryKey" json:"id"`
	UserID uuid.UUID `json:"user_id"`
	ItemID uuid.UUID `json:"item_id"`

	User User `gorm:"foreignKey:UserID" json:"-"`
	Item Item `gorm:"foreignKey:ItemID" json:"-"`
}
