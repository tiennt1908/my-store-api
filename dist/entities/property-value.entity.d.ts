import { PropertyItemEntity } from './property-item.entity';
export declare class PropertyValueEntity {
    id: number;
    value: string;
    propertyId: number;
    propertyItems: PropertyItemEntity[];
}
