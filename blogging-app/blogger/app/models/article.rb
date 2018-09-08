class Article < ApplicationRecord
  has_many :comments,  dependent: :destroy
  has_many :taggings,  dependent: :destroy
  has_many :tags, through: :taggings
  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png"]

  def tag_list
		tags.join(", ")
	end

	def tag_list=(tags_string)
		tag_list = tags_string.split(',').map { |tag| tag.strip.downcase }.uniq
		self.tags = tag_list.map { |tag| Tag.find_or_create_by(name: tag) }
end

end
