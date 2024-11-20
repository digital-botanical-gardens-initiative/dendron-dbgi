

# This is Maëlle's DBGI daily open-notebook.

Today is 2022.11.14


## How to get the EMI_External_id from the ofvs column

Problem: associated to 'value_ci' but dbgi_id also associated to 'value_ci'               
      -  *'value_ci': 'Physalis peruviana', 'name': 'dbgi_id',*
      -  *'value_ci': 'dbgi_000070', 'name': 'emi_external_id',*

=> (?<='value_ci': ')(.*)(?=', 'name': 'emi_external_id')             
        => Problem: Also takes unwanted values in the rows with dbgi id           
              *Payena leerii', 'name': 'dbgi_id', 'name_ci': 'dbgi_id', 'id': 18370479, 'uuid': '7487e64d-5e18-4c11-8b10-f2e49faa665a', 'value': 'Payena leerii', 'user': {'id': 5367650, 'login': 'edouardbruelhart', 'spam': False, 'suspended': False, 'created_at': '2022-02-17T16:00:15+00:00', 'login_autocomplete': 'edouardbruelhart', 'login_exact': 'edouardbruelhart', 'name': None, 'name_autocomplete': None, 'orcid': None, 'icon': None, 'observations_count': 343, 'identifications_count': 0, 'journal_posts_count': 0, 'activity_count': 343, 'species_count': 282, 'universal_search_rank': 343, 'roles': [], 'site_id': 1, 'icon_url': None}}, {'field_id': 15466, 'datatype': 'text', 'user_id': 5367650, 'value_ci': 'dbgi_000019*

? Solutions:
  - limit of length
      => (?<='value_ci': ')(.{1,30})(?=', 'name': 'emi_external_id')
      => seems to work but how long should it be?

