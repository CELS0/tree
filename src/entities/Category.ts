import {Entity, Tree, Column, PrimaryGeneratedColumn, TreeChildren, TreeParent, ManyToOne, OneToMany} from "typeorm";

@Entity()
@Tree('closure-table', {
    closureTableName: 'category'
})
export class Category {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Category, category => category.parent)
    @TreeChildren()
    children: Category[];

    @OneToMany(() => Category, category => category.id)
    @TreeParent()
    parent: Category;
}