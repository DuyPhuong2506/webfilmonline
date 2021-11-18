import React from 'react';
import { Row, Col } from 'antd';
import MovieCard from '../MovieCard/MovieCard';
import './styles.scss';
MoiveSection.propTypes = {
    
};

function MoiveSection(props) {
    const {data} = props;
    return (
        <div className="section movie-section">
            <Row gutter={16}>
                    {
                        data.length > 0 ?
                        data.map((item, i) => (
                            <Col span={4}  key={i}>
                                <MovieCard dataItem={item} />
                            </Col>
                        ))
                        : "Không có phim"
                    }
            </Row>
        </div>
    );
}

export default MoiveSection;