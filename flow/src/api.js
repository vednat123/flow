import axios from 'axios'

async function fetchTrends() {
    const URL = 'https://serpapi.com/search?engine=google_news&q=durham+college';

    try {
      // Make an API request using the proxy
      const response = await axios.get(URL, {
        params: {
          api_key: 'Contact me for the key'  // Replace with your SerpAPI API key
        }
      });
      return response.data;  // Store the response data
      
    } catch (error) {
      console.error('Error fetching trends:', error);
    }
  }

export async function getCards(){
    /** Function to format API response to
     *  cardData format
     * Returns list of dictionaries
     * [
        {
          title: ,
          description: ,
          link: '',
        },
        ]

     *///
    //let data = fetchTrends()['news_results'];

    let data = {        // temporary hardcoded sample response
        "search_metadata": {
            "id": "67f5f8da0004549403ebc5cf",
            "status": "Success",
            "json_endpoint": "https://serpapi.com/searches/e83de30c0ca673ab/67f5f8da0004549403ebc5cf.json",
            "created_at": "2025-04-09 04:34:34 UTC",
            "processed_at": "2025-04-09 04:34:34 UTC",
            "google_news_url": "https://news.google.com/search?q=how+to+find+job",
            "raw_html_file": "https://serpapi.com/searches/e83de30c0ca673ab/67f5f8da0004549403ebc5cf.html",
            "total_time_taken": 2.36
        },
        "search_parameters": {
            "engine": "google_news",
            "q": "how to find job"
        },
        "news_results": [
            {
                "position": 1,
                "title": "The ultimate guide to getting a job: Recruiters, job seekers, and execs reveal top tips",
                "source": {
                    "name": "Business Insider",
                    "icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.businessinsider.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                    "authors": [
                        "Business Insider"
                    ]
                },
                "link": "https://www.businessinsider.com/job-search-tips-recruiters-execs-applicants-2025-4",
                "thumbnail": "https://i.insider.com/67f010bc5d203112923e2072?width=700",
                "thumbnail_small": "https://news.google.com/api/attachments/CC8iK0NnNUthbFp2UVhFNGJUbG5iMWRIVFJEZUFoaThCU2dLTWdZQkFJaXRqUXM",
                "date": "04/07/2025, 09:09 AM, +0000 UTC"
            },
            {
                "position": 2,
                "title": "McKesson Careers | The future of health starts with you.",
                "source": {
                    "name": "McKesson Careers",
                    "icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://careers.mckesson.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL"
                },
                "link": "https://careers.mckesson.com/en",
                "thumbnail": "https://tbcdn.talentbrew.com/company/733/v1_0/img/video-thumbnail-01.jpg",
                "thumbnail_small": "https://news.google.com/api/attachments/CC8iK0NnNUZYek40V0dVeWRqSkpabGRwVFJDY0FSakRBaWdCTWdZeFZaU3ZKUWc",
                "date": "04/06/2025, 07:00 AM, +0000 UTC"
            },
            {
                "position": 3,
                "title": "Looking for Remote Work? These Are the 15 Best Places to Look",
                "source": {
                    "name": "The Everygirl",
                    "icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://theeverygirl.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                    "authors": [
                        "Jenna Piotrowicz"
                    ]
                },
                "link": "https://theeverygirl.com/remote-job-boards/",
                "thumbnail": "https://media.theeverygirl.com/wp-content/uploads/2025/03/remote-jobs-the-everygirl-feature-1.jpg",
                "thumbnail_small": "https://news.google.com/api/attachments/CC8iL0NnNUZVa2syVUUxSWEwUkdkbTVyVFJERUF4aW1CU2dLTWdrQkVJUnVJYVJOMFFB",
                "date": "04/01/2025, 12:17 PM, +0000 UTC"
            },
            {
                "position": 4,
                "title": "Q&A with Jan Mrozinski of the Office of Career Development and Calling",
                "source": {
                    "name": "Bethel University",
                    "icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.bethel.edu&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                    "authors": [
                        "Macey Heath"
                    ]
                },
                "link": "https://www.bethel.edu/news/articles/2025/april/qanda-jan-mrozinski",
                "thumbnail": "https://bethel-university.imgix.net/career-development/images/jan-mrozinski-2024.jpg?w=320&auto=format",
                "thumbnail_small": "https://news.google.com/api/attachments/CC8iK0NnNXdYM1pCYXpFelUxVjZkRzluVFJDM0FSaVRBaWdCTWdZcFJwanNuUWc",
                "date": "04/03/2025, 06:02 AM, +0000 UTC"
            },
        ]
    }['news_results'];
    let cards = []  //Array to store card data


    // API returns 100 results, choose 3 random indexes 
    const indexes = Array.from(new Set(Array.from({ length: 3 }, () => Math.floor(Math.random() * 100) + 1)));

    for (let x in indexes){
        console.log('before fail',x, data)
        cards.push(
            {
                'title': data[x].title,
                'description': data[x].icon,
                'link': data[x].link
            }
        )
    }
    return cards
}