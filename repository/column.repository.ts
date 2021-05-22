import { EntityRepository, Repository } from "typeorm";
import { ColumnEntity } from "../database/entities/ColumnEntity";

@EntityRepository(ColumnEntity)
export class ColumnRepository extends Repository<ColumnEntity> {}
