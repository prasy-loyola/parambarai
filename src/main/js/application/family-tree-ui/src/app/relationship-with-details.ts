export class RelationshipWithDetails {
    id: number;
    relationship: String;
    p1_name: String;
    p1_gender: String;
    p1_id: number;
    p1_stories: String;
    p2_name: String;
    p2_gender: String;
    p2_id: number;
    p2_stories: String;

}


export class RelationshipWithDetailsResp {
    relationshipWithDetailses : RelationshipWithDetails[]
}