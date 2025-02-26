

# This is PMA's DBGI daily open-notebook.

Today is 2024.06.02

## Todo today

### Have a look at the DBGI discussion forum
    - https://github.com/orgs/digital-botanical-gardens-initiative/discussions
###
###

## Doing

## Paused

## Done

## Notes


Working on the query optimizations with Luca


        let query = bio_ott_taxon_items::dsl::bio_ott_taxon_items
        .filter(
            // We try to write the raw SQL in order to us the '<<%' operator.
            diesel::dsl::sql::<diesel::sql_types::Bool>(
                &format!(
                    "'{}' <<% name",
                    query
                ),
            ),
        )
        .limit(limit.unwrap_or(10))
        .offset(offset.unwrap_or(0));


works


        let query = bio_ott_taxon_items::dsl::bio_ott_taxon_items
            .filter(
                crate::sql_function_bindings::strict_word_similarity_op(
                    bio_ott_taxon_items::dsl::name,
                    query,
                )
            )
            .order(
                crate::sql_function_bindings::strict_word_similarity(
                    bio_ott_taxon_items::dsl::name,
                    query,
                ),
            )
            .limit(limit.unwrap_or(10))
            .offset(offset.unwrap_or(0));

Doesnt.

However I would like to use the second function call and no direct SQL definition. How should I proceed ?



Lats one returns


[2024-06-02T14:41:00Z DEBUG backend::models::bio_ott_taxon_items] SELECT "bio_ott_taxon_items"."id", "bio_ott_taxon_items"."name", "bio_ott_taxon_items"."ott_id", "bio_ott_taxon_items"."ott_rank_id", "bio_ott_taxon_items"."wikidata_id", "bio_ott_taxon_items"."ncbi_id", "bio_ott_taxon_items"."gbif_id", "bio_ott_taxon_items"."irmng_id", "bio_ott_taxon_items"."worms_id", "bio_ott_taxon_items"."domain_id", "bio_ott_taxon_items"."kingdom_id", "bio_ott_taxon_items"."phylum_id", "bio_ott_taxon_items"."class_id", "bio_ott_taxon_items"."order_id", "bio_ott_taxon_items"."family_id", "bio_ott_taxon_items"."genus_id", "bio_ott_taxon_items"."parent_id", "bio_ott_taxon_items"."icon_id", "bio_ott_taxon_items"."color_id" FROM "bio_ott_taxon_items" WHERE strict_word_similarity_op("bio_ott_taxon_items"."name", $1) ORDER BY strict_word_similarity("bio_ott_taxon_items"."name", $2) LIMIT $3 OFFSET $4 -- binds: ["sapiens", "sapiens", 10, 0]

[2024-06-02T15:52:18Z DEBUG backend::models::bio_ott_taxon_items] SELECT "bio_ott_taxon_items"."id", "bio_ott_taxon_items"."name", "bio_ott_taxon_items"."ott_id", "bio_ott_taxon_items"."ott_rank_id", "bio_ott_taxon_items"."wikidata_id", "bio_ott_taxon_items"."ncbi_id", "bio_ott_taxon_items"."gbif_id", "bio_ott_taxon_items"."irmng_id", "bio_ott_taxon_items"."worms_id", "bio_ott_taxon_items"."domain_id", "bio_ott_taxon_items"."kingdom_id", "bio_ott_taxon_items"."phylum_id", "bio_ott_taxon_items"."class_id", "bio_ott_taxon_items"."order_id", "bio_ott_taxon_items"."family_id", "bio_ott_taxon_items"."genus_id", "bio_ott_taxon_items"."parent_id", "bio_ott_taxon_items"."icon_id", "bio_ott_taxon_items"."color_id" FROM "bio_ott_taxon_items" WHERE strict_word_similarity_commutator_op($1, "bio_ott_taxon_items"."name") ORDER BY strict_word_similarity_dist_commutator_op($2, "bio_ott_taxon_items"."name") LIMIT $3 OFFSET $4 -- binds: ["sapiens", "sapiens", 10, 0]


[2024-06-02T15:29:26Z DEBUG backend::models::bio_ott_taxon_items] SELECT "bio_ott_taxon_items"."id", "bio_ott_taxon_items"."name", "bio_ott_taxon_items"."ott_id", "bio_ott_taxon_items"."ott_rank_id", "bio_ott_taxon_items"."wikidata_id", "bio_ott_taxon_items"."ncbi_id", "bio_ott_taxon_items"."gbif_id", "bio_ott_taxon_items"."irmng_id", "bio_ott_taxon_items"."worms_id", "bio_ott_taxon_items"."domain_id", "bio_ott_taxon_items"."kingdom_id", "bio_ott_taxon_items"."phylum_id", "bio_ott_taxon_items"."class_id", "bio_ott_taxon_items"."order_id", "bio_ott_taxon_items"."family_id", "bio_ott_taxon_items"."genus_id", "bio_ott_taxon_items"."parent_id", "bio_ott_taxon_items"."icon_id", "bio_ott_taxon_items"."color_id" FROM "bio_ott_taxon_items" WHERE 'sapiens' <<% name LIMIT $1 OFFSET $2 -- binds: [10, 0]

## Todo tomorrow, one day ... or never

###
###
###


## Today I learned that

-