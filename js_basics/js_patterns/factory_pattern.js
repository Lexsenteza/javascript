function MemberFactory() {
    this.createMember = (name, membership_type) => {
        let member;

        if (membership_type === 'simple') {
            member = new SimpleMembership(name);
        } else if(membership_type === 'standard') {
            member = new StandardMembership(name);
        } else if(membership_type === 'super') {
            member = new SuperMembership(name);
        }

        member.type = membership_type;

        member.define = function (){
            console.log(`${this.name} (${this.type}): (${this.cost})`)
        }

        return member;
    }

}

const SimpleMembership = function (name) {
    this.name = name;
    this.cost = '$5';
}

const StandardMembership = function (name) {
    this.name = name;
    this.cost = '$15';
}
const SuperMembership = function (name) {
    this.name = name;
    this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('john doe', 'simple'))
members.push(factory.createMember('JA Morant', 'super'))
members.push(factory.createMember('Susy Gala', 'standard'))
members.push(factory.createMember('Giannis Ate', 'super'))
console.log(members);

members.forEach(member => {
    member.define();
})