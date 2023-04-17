import React from 'react';
import axios from 'axios';
import { List, Card, Typography, Image, Row } from 'antd';

const { Title, Text } = Typography;

interface NewsArticle {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
}

const NewsList: React.FC = () => {
    const [news, setNews] = React.useState<NewsArticle[]>([]);

    React.useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/top-headlines', {
                    params: {
                        country: 'us',
                        apiKey: 'c8b375025bc2477a921d56c90f6a6d1f'
                    }
                });
                setNews(response.data.articles);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div>
            <Title level={2} style={{ textAlign: "center" }}>News List</Title>
            <Row gutter={16}>
                <List
                    grid={{ gutter: 16, column: 3 }}
                    dataSource={news}
                    renderItem={(article) => (
                        <List.Item>
                            <div style={{ marginBottom: 10, margin: 10 }}>
                                <Card title={article.title} bordered={true} extra={<a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>}>
                                    <Image
                                        src={article.urlToImage}
                                        style={{ height: '250px', objectFit: 'contain', marginBottom: 20, alignSelf: 'center' }}
                                    />
                                    <div>
                                        <Text>{article.description}</Text>
                                    </div>
                                </Card>
                            </div>
                        </List.Item>
                    )}
                />
            </Row>
        </div>
    );
};

export default NewsList;
