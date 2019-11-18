import React, { Component } from 'react';
import { SHOP_DATA } from './Shop.data';
import '../../components/CollectionPreview/CollectionPreview';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}
