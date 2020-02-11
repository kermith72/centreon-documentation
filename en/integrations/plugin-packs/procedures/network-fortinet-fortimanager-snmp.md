---
id: pp/network-fortinet-fortimanager-snmp
title: Fortinet Fortimanage
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.0 | `STABLE` | Jan 18 2019 |

## Prerequisites
This chapter describes the prerequisites installation needed by plugins
to run.

### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Network-Fortinet-Fortimanager-Snmp

### SNMP
It's necessary to enable SNMP on your equipment

## Centreon Configuration
### Create a host using the appropriate template
Go to *Configuration &gt; Hosts* and click *Add*. Then, fill the form as
shown by the following table:

<table>
<colgroup>
<col width="58%" />
<col width="41%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Field</th>
<th align="left">Value</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Host name</p></td>
<td align="left"><p><em>Name of the host</em></p></td>
</tr>
<tr class="even">
<td align="left"><p>Alias</p></td>
<td align="left"><p><em>Host description</em></p></td>
</tr>
<tr class="odd">
<td align="left"><p>IP</p></td>
<td align="left"><p><em>Host IP Address</em></p></td>
</tr>
<tr class="even">
<td align="left"><p>Monitored from</p></td>
<td align="left"><p><em>Monitoring Poller to use</em></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Host Multiple Templates</p></td>
<td align="left"><p>Net-Fortinet-Fortimanager-SNMP-custom</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.
