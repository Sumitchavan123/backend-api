// Role.js
const { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } = require('typeorm');

@Entity()
@Unique(['name'])
class Role {
    @PrimaryColumn({ length: 18 }) // Adjust length according to your Snowflake ID size
    id;

    @Column({ length: 64 })
    name;

    @CreateDateColumn({ type: 'timestamp' })
    created_at;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at;
}

module.exports = Role;
