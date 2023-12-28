// Member.js
const { Entity, PrimaryColumn, Column, CreateDateColumn, ManyToOne } = require('typeorm');
const { Community } = require('./Community');
const { User } = require('./User');
const { Role } = require('./Role');

@Entity()
class Member {
    @PrimaryColumn({ length: 18 }) // Adjust length according to your Snowflake ID size
    id;

    @ManyToOne(() => Community, community => community.id)
    community;

    @ManyToOne(() => User, user => user.id)
    user;

    @ManyToOne(() => Role, role => role.id)
    role;

    @CreateDateColumn({ type: 'timestamp' })
    created_at;
}

module.exports = Member;
