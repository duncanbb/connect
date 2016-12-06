class DropBenchesTable < ActiveRecord::Migration[5.0]
  class DropProductsTable < ActiveRecord::Migration
    def up
      drop_table :benches
    end

    def down
      raise ActiveRecord::IrreversibleMigration
    end
  end
end
