json.extract! article, :id, :title, :content, :tagline, :created_at, :updated_at
json.url article_url(article, format: :json)
