class CreateMovies < ActiveRecord::Migration[7.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :original_title
      t.string :world-wide_title
      t.string :alternative_title
      t.string :poster_url
      t.string :spoken_languages
      t.string :country
      t.date :release_date
      t.integer :year
      t.integer :runtime
      t.string :genres
      t.string :keywords
      t.string :type
      t.integer :seasons
      t.integer :episodes
      t.text :overview
      t.string :director
      t.string :writer
      t.string :cast
      t.string :producer
      t.string :imdb_page
      t.decimal :imdb_rating
      t.decimal :tmdb_rating
      t.boolean :home_video
      t.string :vod
      t.boolean :watched
      t.boolean :highlight
      t.decimal :rating
      t.boolean :watchlist
      t.text :comment
      t.integer :mid

      t.timestamps
    end
  end
end
