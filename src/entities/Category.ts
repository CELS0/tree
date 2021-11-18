import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Tree, TreeChildren, TreeParent } from "typeorm";

@Entity('categories')
@Tree("adjacency-list")
export class Category {
  @PrimaryGeneratedColumn('increment') id: number

  @Column() name: string

  @ManyToOne(() => Category, category => category.children)
  @TreeParent()
  parent: Category

  @OneToMany(() => Category, category => category.parent)
  @TreeChildren()
  children: Category[]
}