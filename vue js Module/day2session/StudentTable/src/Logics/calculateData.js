export function Average(obj){
    return (obj.Hindi+obj.English+obj.Math)/3
}
export function Grade(obj){
let avg= (obj.Hindi+obj.English+obj.Math)/3;
if(avg>90){
    return 'A';
}
else if(avg<90 && avg>70)
{
    return 'B'
}
else if(avg<70 && avg>50)
{
    return 'C'
}
else{
    return 'D'
}
}