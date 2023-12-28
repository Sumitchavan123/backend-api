// Community.js
const { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } = require('typeorm');
const { User } = require('./User');

@Entity()
@Unique(['slug'])
class Community {
    @PrimaryColumn({ length: 18 }) // Adjust length according to your Snowflake ID size
    id;

    @Column({ length: 128 })
    name;

    @Column({ length: 255 })
    slug;

    @ManyToOne(() => User, user => user.id)
    owner;

    @CreateDateColumn({ type: 'timestamp' })
    created_at;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at;
}

module.exports = Community;
