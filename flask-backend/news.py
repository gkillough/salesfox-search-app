def retrieve_news(zip_code):
    print(f"Zip Code: {zip_code}")
    return {
        "total": 3,
        "items": [
            {
                "title": "Example News Headline",
                "description": "Some news happened today and it was newsworthy news.",
                "link": "https://salesfox.ai",
                "source": "Salesfox News"
            },
            {
                "title": "A Different News Headline",
                "description": "Different news happened recently. Different, but interesting.",
                "link": "https://salesfox.ai",
                "source": "Channel Pi News"
            },
            {
                "title": "One Last News Headline",
                "description": 'This is the last of the news. As they say, "no news is good news."',
                "link": "https://salesfox.ai",
                "source": "Fake News Network, Inc."
            }
        ]
    }
