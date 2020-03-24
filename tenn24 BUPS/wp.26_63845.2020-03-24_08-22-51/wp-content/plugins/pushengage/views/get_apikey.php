<div class="container-widget">
			<?php include_once('header.php');?>
		<!-- Start Row -->
		<div class="row">
		<!-- Start Panel -->
			<div class="col-md-12">
				<div class="panel panel-default">
					<div class="panel-title">API Keys</div>
					<div class="panel-body table-responsive">
						<table class="table display">
							<tbody>
								<tr>
									<th>API_Key</th>
									<th>Created_at</th>
									<th>Modified_at</th>
									<th>status</th>
									<th>Actions</th>
								</tr>
								<?php
								  if (isset($result) && $result)
								  foreach ($result->result() as $key ) {
									echo'<tr>';
								   
									echo '<td>'.$key->api_key.'</td>';
									$dateString = $key->created_at ;
									$dateObject = new DateTime($dateString);
									echo '<td>'.$dateObject->format('h:i:s A  d/m/Y ').'</td>';
									
									$dateString2 = $key->modified_at;
									$dateObject2 = new DateTime($dateString2);
									echo '<td>'.$dateObject2->format('h:i:s A  d/m/Y ').'</td>';
									echo '<td>'.$key->status.'</td>';
									if($key->status=='active')
									{
									  // echo  '<form method="LINK" action="../../pushengage/html/key_generator/key_inactive/'.$key->row_id.'">';
								
									   echo "<td><a class='btn btn-danger' href='".base_url("dashboard/key_generator/key_inactive/".$key->row_id)."'>make inactive</a></td>";
									   // echo "</form>";
									}
									elseif($key->status=='inactive')
									{
									   echo '<td>'."---".'</td>';
									}
								  }
								?>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<!-- End Panel -->
		</div>
		<!-- End Row -->

		<div class="row">
			<div class="col-xs-3">
				<br><br>              
				<td><a class="btn btn-block btn-success" href="<?php echo base_url("dashboard/key_generator/key_generate");?>">Generate new Key</a></td>              
			</div>
		</div> 
</div>
