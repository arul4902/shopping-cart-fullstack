package models

import "github.com/google/uuid"

type Item struct {
	ID    uuid.UUID `gorm:"type:uuid;primaryKey" json:"id"`
	Name  string    `json:"name"`
	Price float64   `json:"price"`
}