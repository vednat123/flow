import axios from 'axios'

async function fetchTrends() {
    /** Makes API request to SerpAPI google news
     * Fetches google news articles related to search content
     * Returns response json
     */
    try {
      // Make an API request using the proxy
      const response = await axios.get('/serpapi/search', {
        params: {
          engine: 'google_news',
          q: 'Ontario+Tech',
          api_key: 'Contact me for Key'  // Don't forget your API key
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
     */
    let data = await fetchTrends();

    let cards = []  //Array to store card data

    // API returns 100 results, choose 3 random indexes 
    const indexes = Array.from(new Set(Array.from({ length: 3 }, () => Math.floor(Math.random() * data['news_results'].length) + 1)));
    
    for (let x in indexes){
        console.log('Finding index ',x)
        cards.push(
            {
                'title': data['news_results'][indexes[x]].title,
                'description': data['news_results'][indexes[x]].icon,   // Fix
                'link': data['news_results'][indexes[x]].link
            }
        )
    }
    return cards
}