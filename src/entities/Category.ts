import {Entity, Tree, Column, PrimaryGeneratedColumn, TreeChildren, TreeParent, TreeLevelColumn, ManyToOne, OneToMany} from "typeorm";

@Entity()
@Tree("closure-table")
export class Category {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Category, category => category.children)
    @TreeChildren()
    children: Category[];

    @OneToMany(() => Category, category => category.parent)
    @TreeParent()
    parent: Category;
}