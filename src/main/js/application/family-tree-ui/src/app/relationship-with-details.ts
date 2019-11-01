export class RelationshipWithDetails {
    id: number;
    relationship: string;
    p1_name: string;
    p1_gender: string;
    p1_id: number;
    p1_stories: string;
    p2_name: string;
    p2_gender: string;
    p2_id: number;
    p2_stories: string;

}


export class RelationshipWithDetailsResp {
    relationshipWithDetailses : RelationshipWithDetails[]
}