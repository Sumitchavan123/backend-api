// User.js
const { Entity, PrimaryColumn, Column, Unique, CreateDateColumn } = require('typeorm');

@Entity()
@Unique(['email'])
class User {
    @PrimaryColumn({ length: 18 }) // Adjust length according to your Snowflake ID size
    id;

    @Column({ length: 64, nullable: true })
    name;

    @Column({ length: 128 })
    email;

    @Column({ length: 64 })
    password;

    @CreateDateColumn({ type: 'timestamp' })
    created_at;
}

module.exports = User;
