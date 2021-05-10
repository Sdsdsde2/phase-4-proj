class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :review
      t.integer :price
      t.integer :quantity
      t.integer :rating
      t.string :image
      t.timestamps
    end
  end
end
