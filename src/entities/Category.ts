import {Entity, Tree, Column, PrimaryGeneratedColumn, TreeChildren, TreeParent, ManyToOne, OneToMany} from "typeorm";

@Entity()
@Tree('adjacency-list',{})
export class Category {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @TreeChildren()
    children: Category[];

    @TreeParent()
    parent: Category;
}